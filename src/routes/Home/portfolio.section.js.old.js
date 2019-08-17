import React from 'react'

const PortfolioTitle = () => {
    return (
        <div className="PortfolioTitle section-padding-3 text-center">
            <h1>Past Projects</h1>
            <h3>Checkout some of my previous work</h3>
        </div>
    )
}
const Portfolio = () => {
    return (
        <section className="Portfolio">

            {PortfolioTitle()}

            <div className="row-fluid">
                <div className="col-12 col-md-8 Item tipsntoes">
                    <p className="title">Tips 'n' Toes</p>
                    <div className="unfocused"></div>
                    <div className="focused"></div>
                </div>
                <div className="col-12 col-md-4 Item kaitenbun">
                    <p className="title">Kaitenbun</p>
                    <p className="sub-title">回転聞</p>
                </div>
                <div className="col-12 col-md-4 Item habbocreate">
                    <div className="unfocused">
                        <p className="title">HabboCreate</p>
                    </div>
                    <div className="focused">
                        <div className="spinner"></div>
                        <div className="hbc-logo"></div>
                        <div className="buildings"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio