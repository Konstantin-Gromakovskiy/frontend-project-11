export default (value, previousValue, feedsContainer, i18n) => {
  const feed = value
    .filter((newFeed) => !previousValue.find((previousFeed) => previousFeed.id === newFeed.id))[0];

  if (feedsContainer.innerHTML === '') {
    const card = document.createElement('div');
    card.classList.add('card', 'border-0');
    feedsContainer.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title', 'h4');
    cardTitle.textContent = i18n.t('otherTexts.feeds');
    cardBody.appendChild(cardTitle);

    const feedsList = document.createElement('ul');
    feedsList.classList.add('list-group', 'border-0', 'rounded-0');
    card.appendChild(feedsList);
  }

  const feedsList = feedsContainer.querySelector('ul');
  const feedElem = document.createElement('li');
  feedElem.classList.add('list-group-item', 'border-0', 'border-end-0');
  feedsList.appendChild(feedElem);

  const feedTitle = document.createElement('h3');
  feedTitle.classList.add('h6', 'm-0');
  feedTitle.textContent = feed.title;
  feedElem.appendChild(feedTitle);

  const feedDescription = document.createElement('p');
  feedDescription.classList.add('m-0', 'small', 'text-black-50');
  feedDescription.textContent = feed.description;
  feedElem.appendChild(feedDescription);
};
