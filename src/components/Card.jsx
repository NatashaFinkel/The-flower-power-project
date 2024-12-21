// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import flowers from '../json/flowers.json';
import Image from './Image';

function Card() {
    const array = useSelector((state) => state.shoppingList.array);
    const baseUrl = window.location.origin;
    let imageUrl;

    useEffect(() => {
        const allCards = document.querySelectorAll('[class^="card clickable"]');
        array.map((arrayElement) => {
            allCards.forEach((card) => {
                if (card.id === arrayElement.id) {
                    //  Ceci ajoute du style si le bouquet est déjà dans le panier.
                    card.classList.add("sepia-style");
                    card.style.pointerEvents = "none";
                }
            });
        });
    }, [array]);

    function showModal(event) {
        let selectedBouquet = event.currentTarget;
        let modal = document.getElementById("bouquet-modal");
        let modalImgSrc = document.getElementById("modal-img-src");
        let modalTitle = document.getElementById("modal-title");
        let modalDescription = document.getElementById("modal-description");
        let modalContent = document.querySelector(".modal-content");
        let modalPrice = document.getElementById("modal-price");

        modal.style.display = "flex";
        modalImgSrc.src = selectedBouquet.getAttribute("src");
        modalImgSrc.alt = selectedBouquet.getAttribute("alt");
        modalTitle.textContent = selectedBouquet.getAttribute("titlecontent");
        modalDescription.textContent = selectedBouquet.getAttribute("description");
        modalPrice.textContent = selectedBouquet.getAttribute("price");

        let parentDiv = selectedBouquet.closest("div");
        let parentDivId = parentDiv.id;
        modalContent.id = parentDivId;
    }

    return (
        <div className="card-container" key="cardContainer">
            {flowers &&
                flowers.map((flower) => {
                    //  Pour la version déployée.
                    if (baseUrl === "https://natashafinkel.github.io") {
                        imageUrl = `${baseUrl}/The-flower-power-project/${flower.imgSrc}`;
                    } else {
                        //  Pour la version locale.
                        imageUrl = flower.imgSrc;
                    }
                    return (

                        <div
                            key={flower.index}
                            id={flower.id}
                            className="card clickable"
                            src={imageUrl}
                            alt={flower.imgAlt}
                            // eslint-disable-next-line react/no-unknown-property
                            titlecontent={flower.imgTitle}
                            // eslint-disable-next-line react/no-unknown-property
                            description={flower.imgDescription}
                            // eslint-disable-next-line react/no-unknown-property
                            price={flower.price}
                            onClick={showModal}
                            data-testid={`card-test-id-${flower.index}`}
                        >
                            <Image
                                imageId={`card-${flower.index}-img`}
                                imageSrc={imageUrl}
                                imageAlt={flower.imgAlt}
                                imageDataTestid={`card-img-${flower.index}-test-id`}
                                imageClassName="card-img clickable"
                            />
                            <p className="card-title clickable">{flower.imgTitle}</p>
                        </div>
                    );
                })}
        </div>
    );
}

export default Card;
