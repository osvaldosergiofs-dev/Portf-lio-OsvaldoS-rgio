<script setup>
defineProps({
  channels: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['copy'])
</script>

<template>
  <section class="contact" id="contato" aria-labelledby="contato-title">
    <div class="shell">
      <div class="contact-panel">
        <div>
          <div class="section-kicker">Contato</div>
          <h2 id="contato-title">Vamos construir algo nítido.</h2>
          <p>
            Desenvolvedor Front-End / Full Stack com foco em interfaces modernas, sistemas web e experiência do usuário.
            Busco oportunidades para atuar no desenvolvimento de produtos digitais utilizando Vue.js, Laravel e tecnologias modernas.
          </p>
        </div>

        <div class="contact-list">
          <template v-for="channel in channels" :key="channel.id">
            <button
              v-if="channel.type === 'copy'"
              class="contact-link"
              type="button"
              :aria-label="`Copiar ${channel.label}`"
              @click="emit('copy', channel.value)"
            >
              <span class="contact-link__main">
                <span class="contact-link__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 6h16v12H4z"></path>
                    <path d="m4 7 8 6 8-6"></path>
                  </svg>
                </span>
                <span class="contact-link__text">
                  <span class="contact-link__name">{{ channel.label }}</span>
                  <span class="contact-link__url">{{ channel.display || channel.value }}</span>
                </span>
              </span>
              <small>{{ channel.action }}</small>
            </button>

            <a
              v-else-if="channel.type === 'link'"
              class="contact-link"
              :href="channel.value"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Abrir ${channel.label}`"
            >
              <span class="contact-link__main">
                <span class="contact-link__icon" aria-hidden="true">
                  <svg v-if="channel.id === 'linkedin'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8 11v7"></path>
                    <path d="M8 8v.01"></path>
                    <path d="M13 18v-4a3 3 0 0 1 6 0v4"></path>
                    <path d="M13 11v7"></path>
                    <path d="M4 4h16v16H4z"></path>
                  </svg>
                  <svg v-else-if="channel.id === 'github'" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 19c-4 1.5-4-2.5-5-3"></path>
                    <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.7 7 4.2 4.2 0 0 0 18.6 4s-1-.3-3.4 1.3a11.4 11.4 0 0 0-6.2 0C6.6 3.7 5.6 4 5.6 4a4.2 4.2 0 0 0-.1 3A4.6 4.6 0 0 0 4.2 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22"></path>
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5z"></path>
                    <path d="M9 8.5c.2 2.9 2 4.8 5 5.5l1.4-1.4"></path>
                    <path d="M9 8.5 7.8 9.7"></path>
                  </svg>
                </span>
                <span class="contact-link__text">
                  <span class="contact-link__name">{{ channel.label }}</span>
                  <span class="contact-link__url">{{ channel.display || channel.value }}</span>
                </span>
              </span>
              <small>{{ channel.action }}</small>
            </a>

            <a
              v-else
              class="contact-link"
              :href="channel.value"
              download
              :aria-label="`Baixar ${channel.label}`"
            >
              <span class="contact-link__main">
                <span class="contact-link__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
                    <path d="M14 3v5h5"></path>
                    <path d="M12 11v6"></path>
                    <path d="m9 14 3 3 3-3"></path>
                  </svg>
                </span>
                <span class="contact-link__text">
                  <span class="contact-link__name">{{ channel.label }}</span>
                </span>
              </span>
              <small>{{ channel.action }}</small>
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
