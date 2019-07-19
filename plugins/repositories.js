import createRepository from '~/api/repository.js'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    posts: repositoryWithAxios('posts'),
    users: repositoryWithAxios('users'),
    photos: repositoryWithAxios('photos'),
  }

  inject('repositories', repositories)
}