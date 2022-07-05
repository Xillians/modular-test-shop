import { mount } from "@vue/test-utils";
import Login from "@/components/Login.vue";

describe("Login.vue", () => {
  it("Username is rendered correctly", () => {
    const wrapper = mount(Login);
    const email = wrapper.find('Email');

    expect(email).not.toBeUndefined();
  });
  it("Password is rendered correctly", () => {
    const wrapper = mount(Login);
    const password_input = wrapper.find('password');

    expect(password_input).not.toBeUndefined();
  });
  it("Login button is rendered correctly", () => {
    const wrapper = mount(Login);
    const button = wrapper.find('log-in-button');

    expect(button).not.toBeUndefined();
  });
  
});
