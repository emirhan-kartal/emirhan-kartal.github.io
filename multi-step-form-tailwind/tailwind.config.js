/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-mobile': "url('/multi-step-form/assets/images/bg-sidebar-mobile.svg')",
        'sidebar-desktop': 'url("/multi-step-form/assets/images/bg-sidebar-desktop.svg")',
        'sub-arcade': "url('/multi-step-form/assets/images/icon-arcade.svg')",
        'sub-advanced': "url('/multi-step-form/assets/images/icon-advanced.svg')",
        'sub-pro': "url('/multi-step-form/assets/images/icon-pro.svg')",
        'icon-thanks': "url('/multi-step-form/assets/images/icon-thank-you.svg')"
      },
      colors: {
        'dif-blue':'#02295a'
      }
    },

  },
  plugins: [],
}

