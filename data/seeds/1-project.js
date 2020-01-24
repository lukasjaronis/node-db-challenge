exports.seed = async (knex) => {
  await knex('project').insert([
         { id: 1, name: 'Clean Room', description: "Use everything in your power to clean your room." },
         { id: 2, name: 'Clean Computer', description: "Use a little bit of windex and papertowls to clean the inside of the computer." },
         { id: 3, name: 'Walk Eko', description: "Take Eko for a walk around the block." },
       ])
 }