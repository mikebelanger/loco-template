use loco_rs::prelude::*;

use crate::models::_entities::movies;

use askama::Template;

#[derive(Template)]
#[template(path = "list.html")]
struct MovieTemplate<'a> {
    items: &'a Vec<movies::Model>,
}

/// Render a list view of movies.
///
/// # Errors
///
/// When there is an issue with rendering the view.
pub fn list(_v: &impl ViewRenderer, items: &Vec<movies::Model>) -> Result<Response> {
    let movie_html = MovieTemplate { items };
    format::html(&movie_html.render().unwrap_or("<h1>Problem with list view</h1>".to_string()))
}

/// Render a single movies view.
///
/// # Errors
///
/// When there is an issue with rendering the view.
pub fn show(v: &impl ViewRenderer, item: &movies::Model) -> Result<Response> {
    format::render().view(v, "movies/show.html", serde_json::json!({"item": item}))
}

/// Render a movies create form.
///
/// # Errors
///
/// When there is an issue with rendering the view.
pub fn create(v: &impl ViewRenderer) -> Result<Response> {
    format::render().view(v, "movies/create.html", serde_json::json!({}))
}

/// Render a movies edit form.
///
/// # Errors
///
/// When there is an issue with rendering the view.
pub fn edit(v: &impl ViewRenderer, item: &movies::Model) -> Result<Response> {
    format::render().view(v, "movies/edit.html", serde_json::json!({"item": item}))
}
