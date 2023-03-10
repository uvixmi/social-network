import React from "react"
import ProfileStatus from "./ProfileStatus"
import { create } from "react-test-renderer"

describe("ProfileStatus component", () => {
  test("Status should be in the state", () => {
    const component = create(<ProfileStatus status="hello" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("hello")
  })
  test("After creation span should be displayed1 ", () => {
    const component = create(<ProfileStatus status="hello" />)
    const root = component.root
    const span = root.findByType("span")
    expect(span).not.toBeNull()
  })
  test("After creation span should be displayed2", () => {
    const component = create(<ProfileStatus status="hello" />)
    const root = component.root
    const span = root.findByType("span")
    expect(span.children[0]).toBe("hello")
  })
  test("After creation span should be displayed3 ", () => {
    const component = create(<ProfileStatus status="hello" />)
    const root = component.root
    const span = root.findByType("span")
    span.props.onDoubleClick()
    const input = root.findByType("input")
    expect(input.props.value).toBe("hello")
  })
  test("After creation span should be displayed3 ", () => {
    const mockCallback = jest.fn()
    const component = create(
      <ProfileStatus status="hello" updateStatus={mockCallback} />
    )
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
