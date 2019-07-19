import createRepository from '~/api/repository.js'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    products: repositoryWithAxios('products'),
    categories: repositoryWithAxios('productcategories'),
  }

  inject('repositories', repositories)
}