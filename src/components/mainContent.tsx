import { ReactComponent as Ellipsis } from '../img/•••.svg'
import pfp from '../img/minji.png';
import admin from '../img/admin.png';


const MainContent = () => {
    return (
        <>
            <section className="section-container d-grid">
                <h2>Latest Feed</h2>

                <div className="content d-grid">
                    <div className="d-flex row-sm" style={{ alignItems: "center" }}>
                        <img src={pfp} width={'50px'} />
                        <div className="d-flex" id="test">
                            <h3>Anonymouse</h3>
                            <p>(7351c98) . 4 hr.ago</p>
                        </div>
                    </div>

                    <div className="row-sm" id="content-context">
                        <p>Shoutout sa akong crush sa A123 na si Laurence Kharl Devera, sana pag laki mo ay lumaki ka ng husto &lt;3</p>
                    </div>
                    <div className="row-sm">
                        <div id="content-actions">
                            <span>Reply (10)</span>
                            <span>Upvote (10)</span>
                            <span>Downvote</span>
                            <Ellipsis />
                        </div>
                    </div>
                </div>

                <div className="content d-grid">
                    <div className="d-flex row-sm" style={{ alignItems: "center" }}>
                        <img src={admin} width={'50px'} />
                        <div className="d-flex" id="test">
                            <h3>Admin</h3>
                            <p>(f9b1a76) . 4 hr.ago</p>
                        </div>
                    </div>

                    <div className="row-sm" id="content-context">
                        <p>Hello everyone! Mag remind lang ko na dili nato pairalon atong pagkafeeling anonymous sa platform, kay at the end of the day, tinood gihapon na tao ang naa sa pikas na screen.</p>
                    </div>
                    <div className="row-sm">
                        <div id="content-actions">
                            <span>Reply (10)</span>
                            <span>Upvote (120)</span>
                            <span>Downvote</span>
                            <Ellipsis />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainContent;