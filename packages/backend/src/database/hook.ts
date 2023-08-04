import { InstanceDestroyOptions, Model } from 'sequelize'
import { getUserIdFromSession } from './cls'

interface ModelDefaultProps extends Model {
  createdBy: number | null
  updatedBy: number | null
  deletedBy: number | null
}

interface CustomDestroyOptions extends InstanceDestroyOptions {
  paranoid?: boolean
  silent?: boolean
}

const setUserToCreatedByForAllModels = <M extends ModelDefaultProps>(
  models: Array<M>,
) => {
  const userId = getUserIdFromSession()
  if (userId) {
    for (const model of models) {
      if (!model.createdBy) {
        model.createdBy = userId
      }
      if (!model.updatedBy) {
        model.updatedBy = userId
      }
    }
  }
}

const setUserToCreatedBy = <M extends ModelDefaultProps>(model: M) => {
  const userId = getUserIdFromSession()
  if (userId) {
    model.createdBy = userId
    model.updatedBy = userId
  }
}

const setUserToUpdatedBy = <M extends ModelDefaultProps>(model: M) => {
  const userId = getUserIdFromSession()
  if (userId) model.updatedBy = userId
}

const setUserToDeletedBy = async <M extends ModelDefaultProps>(model: M) => {
  const userId = getUserIdFromSession()
  if (userId) {
    model.deletedBy = userId
    await model.save({ hooks: false, silent: true })
  }
}

const removeUserFromDeletedBy = async <M extends ModelDefaultProps>(
  model: M,
) => {
  model.deletedBy = null
  await model.save({ hooks: false, silent: true })
}

// To prevent sequalize from updating updatedAt field
const makeDestroySilent = <M extends ModelDefaultProps>(
  model: M,
  options: CustomDestroyOptions,
) => {
  options.silent = true
}

export const beforeBulkCreate = <M extends ModelDefaultProps>(
  models: Array<M>,
) => {
  setUserToCreatedByForAllModels(models)
}

export const beforeCreate = <M extends ModelDefaultProps>(model: M) => {
  setUserToCreatedBy(model)
}

export const beforeUpdate = <M extends ModelDefaultProps>(model: M) => {
  setUserToUpdatedBy(model)
}

export const beforeDestroy = async <M extends ModelDefaultProps>(
  model: M,
  options: CustomDestroyOptions,
) => {
  await makeDestroySilent(model, options)
}

export const afterDestroy = async <M extends ModelDefaultProps>(model: M) => {
  await setUserToDeletedBy(model)
}

export const afterRestore = async <M extends ModelDefaultProps>(model: M) => {
  await removeUserFromDeletedBy(model)
}
