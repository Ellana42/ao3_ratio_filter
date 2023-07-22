window.onload = modifyPage();

function displayMetrics(work) {
  console.log("recall");
  var hits = work.querySelector("dd.hits").innerHTML;
  var kudos = work.querySelector("dd.kudos").firstChild.innerHTML;
  var bookmarks = work.querySelector("dd.bookmarks");
  if (bookmarks) {
    bookmarks = bookmarks.firstChild.innerHTML;
  }
  var stats = work.getElementsByClassName("stats")[0];

  var kudosHitTitle = document.createElement("dt");
  kudosHitTitle.className = "kudosPerHit";
  kudosHitTitle.innerHTML = "Kudos/Hits:";
  var kudosHitValue = document.createElement("dd");
  kudosHitValue.className = "kudosPerHit";
  kudosHitValue.innerHTML = parseInt(kudos) / parseInt(hits);
  kudosHitValue.innerHTML = ((kudos / hits) * 100).toFixed(1) + "%";
  stats.appendChild(kudosHitTitle);
  stats.appendChild(kudosHitValue);

  if (bookmarks) {
    var bookmarksHitTitle = document.createElement("dt");
    bookmarksHitTitle.className = "bookmarksPerHit";
    bookmarksHitTitle.innerHTML = "Bookmarks/Hits:";
    var bookmarksHitValue = document.createElement("dd");
    bookmarksHitValue.className = "bookmarksPerHit";
    bookmarksHitValue.innerHTML = parseInt(bookmarks) / parseInt(hits);
    bookmarksHitValue.innerHTML = ((bookmarks / hits) * 100).toFixed(1) + "%";
    stats.appendChild(bookmarksHitTitle);
    stats.appendChild(bookmarksHitValue);
  }
}

function modifyPage() {
  console.log("CALLED");
  var works = document.getElementsByClassName("blurb");
  works = Array.from(works);

  works.map(displayMetrics);
}
