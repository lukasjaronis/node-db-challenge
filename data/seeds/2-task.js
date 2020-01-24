 exports.seed = async (knex) => {
  await knex('task').insert([
    { id: 1, description: 'Clean every inch of the room.', notes: "dont forget to clean the dust on the fans", completed: false, project_id: 1 },
    { id: 2, description: 'Clean computer but make sure to do it carefully.', notes: "get the fans too", completed: false, project_id: 2 },
    { id: 3, description: 'Take eko for a walk today', notes: "make him a happy boy", completed: false, project_id: 3 }
      ])
}