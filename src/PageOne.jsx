import React from 'react'
import './pageone.css'
import { useEffect, useState } from "react"

export function PageOne() {
    const [divLeftWidth, setDivLeftWidth] = useState(window.innerWidth * 0.5)

    const [rotateVal, setRotateval] = useState({ x: 15, y: -9, z: 32, translateX: 20 })


    useEffect(() => {
        const scroll = document.addEventListener("scroll", (e) => {
            function clamp(min, max, value) {
                return Math.min(Math.max(value, min), max);
            };
            var x = 0;

            if (window.scrollY < 500) {
                // const c = document.getElementById('container_fixed').style.position = 'fixed';
                x = clamp(0, window.innerWidth * 0.5, window.scrollY * 2.5);
            } else {
                x = 0;
            }
            var _actualValue = (window.innerWidth * 0.5) - x;

            setDivLeftWidth(_actualValue);

            var _x = clamp(0, 15, 15 - window.scrollY * 0.3);
            var _y = clamp(0, 9, 9 - window.scrollY * 0.3);
            var _z = clamp(0, 32, 32 - window.scrollY * 0.3);
            console.log({ _x })
            console.log({ _y })
            console.log({ _z })
            setRotateval(values => { return { ...values, x: _x, y: -_y, z: _z } })
        })
        return () => {
            document.removeEventListener("scroll", scroll)
        }
    }, [])

    return (
        <>
            <div id='container_fixed'>
                <div className="flex-hero" style={{ willChange: "width", width: `${divLeftWidth}px` }}>
                    <div className="block-hero">
                        <h1 className="heading-hero">
                            Heading..
                        </h1>
                        <p className="paragraph-large">
                            9,999 Holy Cows grazing the heavenly green pastures of the metaverse have
                            entered the pearly white gates of the Ethereum blockchain. The Holy Cows
                            community accepts all shapes, sizes and cultures. Join on a quest filled
                            with cow tipping rewards and adventures!
                        </p>
                        <h4 className="heading-7 presale">
                            ?????? Presale purchase ??????
                        </h4>
                    </div>
                </div>

                <div className="transformed-hero">
                    <div className="section-hero wf-section" style={{ willChange: "transform", transform: `translate3d(${rotateVal.translateX}%, 0px, 0px) scale3d(0.8, 0.8, 1) rotateX(${rotateVal.x}deg) rotateY(${rotateVal.y}deg) rotateZ(${rotateVal.z}deg) skew(0deg, 0deg)`, transformStyle: "preserve-3d" }}>
                        <div className="w-layout-grid grid-hero" style={{ willChange: "transform", transform: `translate3d(0px, 10.574vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: "preserve-3d" }}>
                            <div className="grid-hero---row-1">
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                            </div>
                            <div className="grid-hero---row-1">
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                            </div>
                            <div className="grid-hero---row-1">
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                            </div>
                            <div className="grid-hero---row-1">
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                                <img src="https://global-uploads.webflow.com/612e20fc5129789cecdf1cb8/612e368e686100b5f4c080b4_%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%2010007-p-1600.png" alt="pic" className="image-hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <p>
                    9,999 Holy Cows grazing the heavenly green pastures of the metaverse
                    have entered the pearly white gates of the Ethereum blockchain.
                    The Holy Cows community accepts all shapes, sizes and cultures.
                    Join on a quest filled with cow tipping rewards and adventures!
                </p>

                <p>
                    9,999 Holy Cows grazing the heavenly green pastures of the metaverse
                    have entered the pearly white gates of the Ethereum blockchain.
                    The Holy Cows community accepts all shapes, sizes and cultures.
                    Join on a quest filled with cow tipping rewards and adventures!
                </p>

                <p>
                    9,999 Holy Cows grazing the heavenly green pastures of the metaverse
                    have entered the pearly white gates of the Ethereum blockchain.
                    The Holy Cows community accepts all shapes, sizes and cultures.
                    Join on a quest filled with cow tipping rewards and adventures!
                </p>

                <p>
                    9,999 Holy Cows grazing the heavenly green pastures of the metaverse
                    have entered the pearly white gates of the Ethereum blockchain.
                    The Holy Cows community accepts all shapes, sizes and cultures.
                    Join on a quest filled with cow tipping rewards and adventures!
                </p>

                <p>
                    9,999 Holy Cows grazing the heavenly green pastures of the metaverse
                    have entered the pearly white gates of the Ethereum blockchain.
                    The Holy Cows community accepts all shapes, sizes and cultures.
                    Join on a quest filled with cow tipping rewards and adventures!
                </p>

                <p>
                    9,999 Holy Cows grazing the heavenly green pastures of the metaverse
                    have entered the pearly white gates of the Ethereum blockchain.
                    The Holy Cows community accepts all shapes, sizes and cultures.
                    Join on a quest filled with cow tipping rewards and adventures!
                </p>
            </div>
        </>
    )
}