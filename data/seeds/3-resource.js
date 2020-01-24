exports.seed = async (knex) => {
  await knex('resource').insert([
    {id: 1, name: 'Dyson, windex, and papertowels', description: "dyson gets every corner and its lightweight, windex to clean the dust" },
    { id: 2, name: 'Windex and Papertowels', description: "windex to clean the dust" },
    { id: 3, name: 'Leash, poopybags, and treats', description: "leash to keep your dog by you, poopybags for poop, and treats make sure he comes back if he runs away." }
      ])
}