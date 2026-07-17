const loaders = {
  sport: () => import('./sport.js'),
  histoire: () => import('./histoire.js'),
  geographie: () => import('./geographie.js'),
  litterature: () => import('./litterature.js'),
  musique: () => import('./musique.js'),
  culture: () => import('./culture.js'),
  cuisine: () => import('./cuisine.js'),
  personnalites: () => import('./personnalites.js'),
}

export async function loadCategory(catId) {
  const loader = loaders[catId]
  if (!loader) return []
  const mod = await loader()
  return mod.default
}

export async function loadAllQuestions() {
  const all = await Promise.all(
    Object.keys(loaders).map(id => loadCategory(id))
  )
  return all.flat()
}
