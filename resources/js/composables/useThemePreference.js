import { computed, onMounted, ref, watch } from 'vue'

const STORAGE_KEY = 'os-theme-preference'

export function useThemePreference() {
  const theme = ref('dark')

  const isDark = computed(() => theme.value === 'dark')

  const applyTheme = (nextTheme) => {
    theme.value = nextTheme
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    let savedTheme = null
    try {
      savedTheme = localStorage.getItem(STORAGE_KEY)
    } catch {
      savedTheme = null
    }

    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'

    applyTheme(savedTheme || systemTheme)

    const media = window.matchMedia('(prefers-color-scheme: light)')
    media.addEventListener('change', (event) => {
      if (savedTheme) return
      applyTheme(event.matches ? 'light' : 'dark')
    })
  })

  watch(theme, (nextTheme) => {
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme)
    } catch {
      // no-op
    }
  })

  return {
    theme,
    isDark,
    toggleTheme,
  }
}
