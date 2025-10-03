import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// describe('App', () => {
//   it('renders properly', () => {
//     const wrapper = mount(App)
//       await expect(page.locator('h1')).toHaveText('Welcome to TAM Tools')

//     expect(wrapper.text()).toContain('You did it!')
//   })
// })
describe('App', () => {
  it('renders properly', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/cv', component: { template: '<div>cv</div>' } },
      ],
    })

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    // Wait for the router to be ready and for the component to re-render
    await router.isReady()

    // Check if the home link is present
    const aboutLink = wrapper.find('a[href="/about"]')
    expect(aboutLink.exists()).toBe(true)
    expect(aboutLink.text()).toBe('About')

    const projectsLink = wrapper.find('a[href="/#projects"]')
    expect(projectsLink.exists()).toBe(true)
    expect(projectsLink.text()).toBe('Projects')

    const contactLink = wrapper.find('a[href="#contact"]')
    expect(contactLink.exists()).toBe(true)
    expect(contactLink.text()).toBe('Get in touch')
  })
})
