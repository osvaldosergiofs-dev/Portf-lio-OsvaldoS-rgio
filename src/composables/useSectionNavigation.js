import { onMounted, onUnmounted, ref } from 'vue'

export function useSectionNavigation(sectionIds = []) {
  const activeSection = ref(sectionIds[0] || 'home')
  const isMenuOpen = ref(false)
  let observer = null

  const setMenuOpen = (value) => {
    isMenuOpen.value = value
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  onMounted(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: 0.02 },
    )

    sections.forEach((section) => observer.observe(section))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return {
    activeSection,
    isMenuOpen,
    setMenuOpen,
    toggleMenu,
  }
}
