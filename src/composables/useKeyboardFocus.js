import { onMounted, onUnmounted } from 'vue'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useKeyboardFocus(getActiveModalEl, onEscape) {
  const handleKeydown = (event) => {
    const modalEl = getActiveModalEl()

    if (event.key === 'Escape' && modalEl) {
      event.preventDefault()
      onEscape()
      return
    }

    if (event.key !== 'Tab' || !modalEl) return

    const focusables = [...modalEl.querySelectorAll(FOCUSABLE_SELECTOR)].filter(
      (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'),
    )

    if (!focusables.length) return

    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
}
