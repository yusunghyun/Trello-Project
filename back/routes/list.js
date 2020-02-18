const express = require('express');
const router = express.Router();
const {Board,Card,List,User} = require('../models')
const authService = require('../jwt/auth.js')

router.post('/',authService.ensureAuth(),async (req, res) => {
  const userId = 1
  let { title, BoardId, pos } = req.body

  if (!title) res.status(400).end('no title')
  if (!BoardId) res.status(400).end('no boardId')
  if (!pos) res.status(400).end('no pos')

  const list = List.build({ title, pos, BoardId, userId })
  await list.save()

  res.status(201).json({ item: list })
})
router.put('/:id',authService.ensureAuth(),async (req, res) => {
  const {id} = req.params
  let body = req.body

  if (!id) return res.status(400).json({error: 'no id'})

  const list = await List.findOne({
    where: { id }
  })
  if (!list) return res.status(404).json({error: 'no list'})

  Object.keys(body).forEach(key => {
    let value = body[key]
    if (typeof value === 'string') value = value.trim()
    
    if (!value) return 
    list[key] = value
  })

  await list.save()

  res.json({ item: list })
})
router.delete('/:id',authService.ensureAuth(),async (req, res) => {
  const { id } = req.params
  if (!id) return res.status(400).json({ error: 'no id' })

  const cardIds = await Card.findAll({
    where: { listId: id }
  }).map(card => card.id)

  if (cardIds.length) {
    await Card.destroy({
      where: {
        id: { [Op.in]: cardIds }
      }
    })
  }

  await List.destroy({
    where: { id }
  })

  res.status(204).end()
})

module.exports=router