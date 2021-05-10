import { computed } from '@vue/composition-api'
import i18n from '@/utils/locale'

export const useTitle = () => i18n.t('Web Services')

export const useStore = (props, context, form) => {
  const { root: { $store } = {} } = context
  return {
    isLoading: computed(() => $store.getters['$_bases/isLoading']),
    getOptions: () => $store.dispatch('$_bases/optionsWebServices'),
    getItem: () => $store.dispatch('$_bases/getWebServices'),
    updateItem: () => {
      return $store.dispatch('$_bases/updateWebServices', form.value)
    }
  }
}
