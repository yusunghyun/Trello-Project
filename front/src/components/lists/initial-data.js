const initialData = {
  tasks: {
    'task-1': {index: 1, id: 'task-1', content: '1.청소'},
    'task-2': {index: 2, id: 'task-2', content: '2. 방정리 '},
    'task-3': {index: 3, id: 'task-3', content: '3. 쓰레기 버리기 '},
    'task-4': {index: 4, id: 'task-4', content: '4. 책'},
    'task-5': {index: 5, id: 'task-5', content: '5. ㄸㄸㄴㄷㄴㄷㄸㄸㄸㄴㄷㄴㄷㄸㄸ  ㄸㄴㄷㄴㄷㄸㄸ'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      index: 1,
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
    },
    'column-2': {
      id: 'column-2',
      index: 2,
      title: 'Doing',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      index: 3,
      title: 'Done',
      taskIds: [],
    },
    // 'column-4': {
    //   id: 'column-4',
    //   index: 4,
    //   title: 'Done',
    //   taskIds: [],
    // },
    // 'column-5': {
    //   id: 'column-5',
    //   index: 5,
    //   title: 'Done',
    //   taskIds: [],
    // },
    // 'column-6': {
    //   id: 'column-6',
    //   index: 6,
    //   title: 'Done',
    //   taskIds: [],
    // },
  },
  columnOrder: ['column-1','column-2','column-3']
  // , 'column-4', 'column-5', 'column-6'],
}

export const dummyData = {
  item: {
    id: 1,
    title: 'TRELLO PROJECT',
    bgColor: '#eee',
    createdAt: '',
    updatedAt: '',
    UserId: 1,
    Lists: [
      {
        id:1,
        title: "To do",
        pos: 65535,
        createdAt: '',
        updatedAt: '',
        BoardId: 17,
        Cards: [
          {
            id: 7,
            title: 'asd',
            description: null,
            pos: 65535,
            createdAt: '',
            updatedAt: '',
            ListId: 56
          },
          {pos: 1, id: 'task-1', title: '1.청소'},
          {pos: 2, id: 'task-2', title: '2. 방정리 '},
          {pos: 3, id: 'task-3', title: '3. 쓰레기 버리기 '},
          {pos: 4, id: 'task-4', title: '4. 책'},
          {pos: 5, id: 'task-5', title: '5. ㄸㄸㄴㄷㄴㄷㄸㄸㄸㄴㄷㄴㄷㄸㄸ  ㄸㄴㄷㄴㄷㄸㄸ'},

        ]
      },
      
      {
        id:2,
        title: "Done",
        pos: 99999,
        createdAt: '',
        updatedAt: '',
        BoardId: 17,
        Cards: [
          {
            id: 6,
            title: 'afdsafdsadf',
            description: null,
            pos: 99999,
            createdAt: '',
            updatedAt: '',
            ListId: 57
          }
        ]
      }
    ]
  }
}

// tasks: {
//   'task-1': {index: 1, id: 'task-1', content: '1.청소'},
//   'task-2': {index: 2, id: 'task-2', content: '2. 방정리 '},
//   'task-3': {index: 3, id: 'task-3', content: '3. 쓰레기 버리기 '},
//   'task-4': {index: 4, id: 'task-4', content: '4. 책'},
//   'task-5': {index: 5, id: 'task-5', content: '5. ㄸㄸㄴㄷㄴㄷㄸㄸㄸㄴㄷㄴㄷㄸㄸ  ㄸㄴㄷㄴㄷㄸㄸ'},
// },
export default initialData;