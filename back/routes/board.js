const express = require('express');
const router = express.Router();
const {Board,Card,List,User} = require('../models')
const authService = require('../jwt/auth.js')


router.get('/',authService.ensureAuth(),async(req,res)=>{
  // const userId = 1
  const list = await Board.findAll( )
  res.json({ list })
})
router.post('/',authService.ensureAuth(),async(req,res)=>{
  const UserId = 1
  let { title } = req.body
  
  if (!title) res.status(400).end('no title')

  const board = Board.build({ title, UserId })
  await board.save()
  await List.bulkCreate([
    { title: 'Todo', pos: 65535,  BoardId: board.dataValues.id},
    { title: 'Doing', pos: 65535 * 2, BoardId: board.dataValues.id},
    { title: 'Done', pos: 65535 * 4, BoardId:board.dataValues.id},
  ])
  
  res.status(201).json({ item: board })
})
router.get('/:id',authService.ensureAuth(),async(req,res,next)=>{
  
  const { id } = req.params

  const item = await Board.findOne({ 
    where: {id},
    include: [{
      model: List,
      include: [{
        model: Card,
      }]
    }]
  })

  if (!item) return res.status(404).end()
  
  item.Lists.sort((a, b) => a.pos - b.pos)
  item.Lists.forEach(list => {
    list.Cards.sort((a, b) => a.pos - b.pos)
  })
  
  res.json({ item })
})
router.put('/:id',authService.ensureAuth(),async(req,res,next)=>{
  const { id } = req.params
  let body = req.body

  let board = await Board.findOne({ where: { id } })

  if (!board) return res.status(404).end()

  Object.keys(body).forEach(key => {
    let value = body[key]
    if (typeof value === 'string') value = value.trim()

    if (!value) return
    board[key] = value
  })

  await board.save()

  res.json({ item: board })
})
router.delete('/:id',authService.ensureAuth(),async(req,res,next)=>{
  const { id } = req.params
  await Board.destroy({ where: { id } })
  res.status(204).end()  
})

module.exports =  router ;