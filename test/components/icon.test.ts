import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Icon from 'windi-ui'

describe('Icon', () => {
  it('should render an Icon component when the icon is loaded', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'check',
        size: '2xl',
      },
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.vm.$props).toBeTruthy()
  })
})
