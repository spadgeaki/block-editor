module.exports = {
    mode: "jit",
    purge: ["src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light"],
    },
}
