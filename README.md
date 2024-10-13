**Note: its very incomplete**
# Loco template

[Loco](https://www.loco.rs/) is awesome.  This template is an experiment in making slightly different defaults for Loco, to (hopefully) make it even more awesome. How?  By:

* Replacing [Tera](https://keats.github.io/tera/docs/) with [Askama](https://github.com/djc/askama) for more type-safety.
* Replacing the default React frontend with vanilla typescript and webcomponents.
* SSR-rendering of templates gets dumpted into those webcomponents.

This is very WIP, and not complete yet.

To run:

1. Clone directory, `cd` into it.
2. [Install Loco](https://loco.rs/docs/getting-started/tour/) if you haven't already. Using latest rust with rustup.
3. `cargo loco run`

Frontend part (While the above is running)
1. Open a new terminal/tab and `cd` this project root.
2. `npm install`
3. `npm run dev`
4. Open wherever it says its serving in the browser.
5. Movies.
