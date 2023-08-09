import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Alert from '../../packages/windi/src/components/Alert/WAlert.vue'

const AlertTitle = 'This is a title'
describe('Alert', () => {
  it('should render a alert component with a title, should have props and slots', async () => {
    const wrapper = mount(Alert, {
      props: {
        title: AlertTitle,
      },
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(typeof wrapper.props).toBeTypeOf('string')
    // expect(wrapper.props.length).toBe(1)
    expect(wrapper.vm.$props).toBeTruthy()
    expect(wrapper.vm.$slots).toBeTruthy()
  })

  it('should render a close button if closable is true', async () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'This is a title',
        closable: true,
      },
    })
    expect(wrapper.find('button')).toBeTruthy()
  })

  it('should not render a close button if closable is false', async () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'This is a title',
        closable: false,
      },
    })
    expect(wrapper.find('button').exists()).toBeFalsy()
  })
})
