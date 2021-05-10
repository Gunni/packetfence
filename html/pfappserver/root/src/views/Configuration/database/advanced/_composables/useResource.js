import { computed } from '@vue/composition-api'
import i18n from '@/utils/locale'

export const useTitle = () => i18n.t('Database Advanced')

export const useStore = (props, context, form) => {
  const { root: { $store } = {} } = context
  return {
    isLoading: computed(() => $store.getters['$_bases/isLoading']),
    getOptions: () => $store.dispatch('$_bases/optionsDatabaseAdvanced'),
    getItem: () => $store.dispatch('$_bases/getDatabaseAdvanced'),
    updateItem: () => {
      return $store.dispatch('$_bases/updateDatabaseAdvanced', form.value)
    }
  }
}
