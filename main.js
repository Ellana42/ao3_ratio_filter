window.onload = modifyPage();

function displayMetrics(work) {
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

function filter() {
  var work_list = document.getElementsByClassName("work index group")[0];
  var works = work_list.getElementsByClassName("blurb");
  works = Array.from(works)
    .sort((a, b) => {
      var nb = b.querySelector("dd.kudosPerHit").innerHTML;
      return (
        parseFloat(b.querySelector("dd.kudosPerHit").innerHTML) -
        parseFloat(a.querySelector("dd.kudosPerHit").innerHTML)
      );
    })
    .forEach((li) => work_list.appendChild(li));
}

function addFilterButton() {
  // var sort = document.getElementsByClassName("sort")[1].parentNode;
  // var sortOption = document.createElement("input");
  // sortOption.type = "checkbox";
  // sort.appendChild(sortOption);
  // var indicator = document.createElement("span");
  // indicator.class = "indicator";
  // indicator.ariaHidden = true;
  // sort.appendChild(indicator);
}

function modifyPage() {
  var works = document.getElementsByClassName("blurb");
  works = Array.from(works);

  works.map(displayMetrics);
  filter();
}
