const express = require('express');
const router = express.Router();
const {Board,Card,List,User} = require('../models')
const authService = require('../jwt/auth.js')

router.post('/',authService.ensureAuth(),async (req, res) => {
  const userId = 1
  let { title, ListId, pos } = req.body
  if (!title) res.status(400).end('no title')
  if (!ListId) res.status(400).end('no ListId')

  const card = Card.build({ title, pos, ListId, userId })
  await card.save()

  res.status(201).json({ item: card })
})

router.get('/:id',authService.ensureAuth(),async (req, res) => {
  const {id} = req.params
  if (!id) return res.status(400).json({error: 'no id'})

  const card = await Card.findOne({ 
    where: {id}
  })

  res.json({ item: card })
})

router.put('/:id',authService.ensureAuth(),async (req, res) => {
  const {id} = req.params
  let body = req.body

  if (!id) return res.status(400).json({error: 'no id'})

  const card = await Card.findOne({
    where: { id }
  })
  if (!card) return res.status(404).json({error: 'no card'})

  Object.keys(body).forEach(key => {
    let value = body[key]
    if (typeof value === 'string') value = value.trim()
    if (key === 'description' || value)  {
      card[key] = value
    }
  })

  await card.save()

  res.json({ item: card })
})
router.delete('/:id',authService.ensureAuth(),async (req, res) => {
  const { id } = req.params
  await Card.destroy({ where: { id } })
  res.status(204).end()
})

module.exports =  router 