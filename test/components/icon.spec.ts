import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Icon from '../../packages/windi/src/components/Icon/WIcon.vue'

const icon = 'ph:sun'
describe('Icon', () => {
  it('should render with an icon prop', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: icon,
      },
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  // TODO
})
