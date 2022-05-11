import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    
    return (
        
        <>
            <div data-animation="default" data-collapse="small" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" class="navbar w-nav">
        <div class="container-copy w-container"><a href="/" class="brand w-nav-brand"><img
                    src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618bc17f96546b9f45263dcd_Noteshub.png"
                    loading="lazy" alt="" class="image-2 arrange" /></a>
            <nav role="navigation" class="nav-menu w-nav-menu"><Link to="/signInForm" 
                    class="nav-link-copy w-nav-link">Create Account</Link></nav>
            <div class="menu-button w-nav-button">
                <div class="w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
    <div class="hero-section modiii wf-section">
        <div class="container">
            <div class="flexbox combo">
                <div class="left-block changing">
                    <h1 data-w-id="f7c7a7d9-d324-fef0-334d-87ac3e4cdbf4"  class="heading-3">Have your
                        best<br /> notes</h1>
                        
                    <p data-w-id="27ab5e77-4e98-14dc-db10-291c71d693ee"  class="paragraph-3">If you
                        have it, then share it !</p><Link data-w-id="27e2ae35-9997-9e97-d562-3a254a44756a"
                         to="/logInForm" class="button-3 w-button">Log in</Link>
                </div>
                <div class="right-block modif"><img class="image property"
                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618f82afee05345113359cf9_Group%2021.png"
                        width="920.5" height="657" alt=""
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, 66vw"
                        data-w-id="943cc253-466e-137f-d03c-6bee9b6deb3d" loading="lazy"
                        srcset="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618f82afee05345113359cf9_Group%2021-p-500.png 500w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618f82afee05345113359cf9_Group%2021-p-800.png 800w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618f82afee05345113359cf9_Group%2021-p-1080.png 1080w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618f82afee05345113359cf9_Group%2021.png 1493w" />
                </div>
            </div>
        </div>
    </div>
    <div class="section cob wf-section">
        <div class="container center">
            <h1 class="heading-4">Experience on Noteshub</h1>
            <p class="paragraph-4">Users can upload any document (pdf, word documents) or images (.png, .jpeg) that is
                related to their subject along with necessary tags and viewers can rate these files on the basis of
                their level of understanding from the notes as well as
                the detail in which the notes covers the topics.</p><img
                src="./../../public/experience.png"
                loading="lazy" width="870" data-w-id="8fbcbfd6-09df-123c-9ea8-3748f01f6ad9"
                srcset="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619cdad129a28a13d06bf8f2_Group%2041-min-min-p-500.png 500w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619cdad129a28a13d06bf8f2_Group%2041-min-min.png 10879w"
                sizes="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 870px" alt="" />
        </div>
    </div>
    <div class="section cla-section wf-section">
        <div class="container"><img
                src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618bfab2d34e653ccde149dc_Noteshub%20Features.svg"
                loading="lazy" width="282" alt="" class="image-4" />
            <div class="flexy mobile">
                <div data-w-id="84398173-6afa-e925-5d5f-f23a4b12ffd1"  class="div-block-6">
                    <p class="paragraph-7 clor1"><strong>Upload</strong> your notes under the course that the notes
                        belong to and suggest necessary tags for it in order to make it easier to find.</p>
                    <Link to="/upload" class="link-block w-inline-block">
                        <div class="link-2">Upload</div><img
                            src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618cb70cdec3ebbe82f40da0_Arrow%201.svg"
                            loading="lazy" width="43.5" alt="" class="image-5" />
                    </Link>
                </div><img class="image-6 turn"
                    src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6195291165ea297634c5f34c_gp25.png"
                    width="539" alt="" 
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 65vw, 500px"
                    data-w-id="7581af0e-f1ca-2abc-fac2-73607eaf900b" loading="lazy"
                    srcset="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6195291165ea297634c5f34c_gp25-p-500.png 500w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6195291165ea297634c5f34c_gp25-p-800.png 800w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6195291165ea297634c5f34c_gp25-p-1080.png 1080w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6195291165ea297634c5f34c_gp25.png 1166w" />
            </div>
        </div>
    </div>
    <div class="section cla-section combi wf-section">
        <div class="container">
            <div class="flexy mobile"><img class="image-6 mod1 modify modi"
                    src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619529840434bd2138f24140_Group%20261.png"
                    width="539" alt="" sizes="(max-width: 767px) 75vw, 490px"
                    data-w-id="707d9e19-96da-98c4-cf2f-67be0a757002" loading="lazy"
                    srcset="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619529840434bd2138f24140_Group%20261-p-500.png 500w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619529840434bd2138f24140_Group%20261-p-800.png 800w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619529840434bd2138f24140_Group%20261-p-1080.png 1080w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/619529840434bd2138f24140_Group%20261.png 1352w" />
                <div data-w-id="707d9e19-96da-98c4-cf2f-67be0a756ff9"  class="div-block-6 doit">
                    <p class="paragraph-7 color2">Search for notes from the website’s database which has a wide range of
                         courses.</p>
                    <Link to="/search" class="link-block w-inline-block">
                        <div class="link-2">Search</div><img
                            src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618cb70cdec3ebbe82f40da0_Arrow%201.svg"
                            loading="lazy" width="43.5" alt="" class="image-5" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div class="section cla-section mod6 wf-section">
        <div class="container">
            <div class="flexy mobile">
                <div class="div-block-6 mod3">
                    <div class="text-block-6"></div>
                    <div data-w-id="4a1a4bf7-2e85-cc23-3251-86b5f9a63ff9"  class="text-block-5">Rate,
                        edit and delete</div>
                    <p class="paragraph-7"><strong data-w-id="6d516bd6-37d1-8635-f2fa-4690cb3255ba"
                           >You can get honestly rated and <br />verified notes at any time
                            you<br />want to. Also, the uploader has the option to edit and delete their notes</strong>
                    </p>
                </div><img class="image-6 mod2 mod10"
                    src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618cd01d23a78e40d54143c5_Mockup3-min.png"
                    width="539" alt=""  sizes="(max-width: 479px) 75vw, (max-width: 767px) 83vw, 640px"
                    data-w-id="83eda86b-4ce5-27b8-416a-7e3d2b8494cf" loading="lazy"
                    srcset="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618cd01d23a78e40d54143c5_Mockup3-min-p-500.png 500w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618cd01d23a78e40d54143c5_Mockup3-min-p-800.png 800w, https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618cd01d23a78e40d54143c5_Mockup3-min.png 1646w" />
            </div>
        </div>
    </div>
    <div class="section final wf-section">
        <div class="container">
            <h1 class="heading-8">About Our Team</h1>
            <div data-delay="4000" data-animation="slide" class="testimonial-sllider w-slider" data-autoplay="false"
                data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit="0"
                data-nav-spacing="3" data-duration="500" data-infinite="true">
                <div class="mask w-slider-mask">
                    <div class="slide w-slide">
                        <div class="testimonial-card"><img
                                src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d1108e0ed78231e50b043_Stars.svg"
                                loading="lazy" alt="" class="image-7" />
                            <div class="flexxy">
                                <div class="div-block-8 w-clearfix"><img
                                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6199f013b3429d8b49268ad2_Ellipse%20104.png"
                                        loading="lazy" width="56" alt="" class="image-8" />
                                    <div class="div-block-7">
                                        <div class="text-block-3">Atulya Prabhanjan</div>
                                        <div class="text-block-4">20BDS0305</div>
                                    </div>
                                </div>
                            </div>
                            <p class="paragraph-8">Hey there ! <br /><br />I&#x27;m a backend-developer and front-end
                                contributor for our Noteshub.<br />‍<br /> </p>
                        </div>
                    </div>
                    <div class="slide w-slide">
                        <div class="testimonial-card"><img
                                src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d1108e0ed78231e50b043_Stars.svg"
                                loading="lazy" alt="" class="image-7" />
                            <div class="flexxy">
                                <div class="div-block-8 w-clearfix"><img
                                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/61953f296a201a707bf6aaee_Ellipse%20102.png"
                                        loading="lazy" width="56" alt="" class="image-8" />
                                    <div class="div-block-7">
                                        <div class="text-block-3">S.Ashwath</div>
                                        <div class="text-block-4">20BDS0301</div>
                                    </div>
                                    <p class="paragraph-8"><br />Hey there !<br /><br />I&#x27;m a front-end developer
                                        and Ui/Ux designer [Home page] for our Noteshub. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide w-slide">
                        <div class="testimonial-card"><img
                                src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d1108e0ed78231e50b043_Stars.svg"
                                loading="lazy" alt="" class="image-7" />
                            <div class="flexxy">
                                <div class="div-block-8 w-clearfix"><img
                                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6199fc207ec790a6e84a582e_Ellipse%20112.png"
                                        loading="lazy" width="56" alt="" class="image-8" />
                                    <div class="div-block-7">
                                        <div class="text-block-3">Meetali Kewlani</div>
                                        <div class="text-block-4">20BCE0844</div>
                                    </div>
                                </div>
                            </div>
                            <p class="paragraph-8">Hey there !<br /><br />I&#x27;m a front-end developer [interactive
                                login and sign in page] for our Noteshub.</p>
                        </div>
                    </div>
                    <div class="slide w-slide">
                        <div class="testimonial-card"><img
                                src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d1108e0ed78231e50b043_Stars.svg"
                                loading="lazy" alt="" class="image-7" />
                            <div class="flexxy">
                                <div class="div-block-8 w-clearfix"><img
                                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/6199f3cae1c4e2260efb49a1_Ellipse%20105.png"
                                        loading="lazy" width="56" alt="" class="image-8" />
                                    <div class="div-block-7">
                                        <div class="text-block-3">T.Vishaal</div>
                                        <div class="text-block-4">20BDS0271</div>
                                    </div>
                                </div>
                            </div>
                            <p class="paragraph-8">Faucibus. At penatibus ad cubilia risus senectus varius sociis
                                suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.</p>
                        </div>
                    </div>
                    <div class="slide w-slide">
                        <div class="testimonial-card"><img
                                src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d1108e0ed78231e50b043_Stars.svg"
                                loading="lazy" alt="" class="image-7" />
                            <div class="flexxy">
                                <div class="div-block-8 w-clearfix"><img
                                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/61954037e9b26e2462ba0fe5_Ellipse%20103.png"
                                        loading="lazy" width="56" alt="" class="image-8" />
                                    <div class="div-block-7">
                                        <div class="text-block-3">Ashwin Balaji</div>
                                        <div class="text-block-4">20BCE2063</div>
                                    </div>
                                </div>
                            </div>
                            <p class="paragraph-8">Faucibus. At penatibus ad cubilia risus senectus varius sociis
                                suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.</p>
                        </div>
                    </div>
                </div>
                <div class="arrow left w-slider-arrow-left"><img
                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d2737cce5999518d0f570_arrow%20left.svg"
                        loading="lazy" alt="" /></div>
                <div class="arrow w-slider-arrow-right"><img
                        src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d275cccd9270cfc86d873_arrow%20right.svg"
                        loading="lazy" alt="" class="image-9" /></div>
                <div class="slide-nav w-slider-nav w-round"></div>
            </div>
        </div><img
            src="https://uploads-ssl.webflow.com/618b532ec1a5dd65a97382b9/618d2ea745a3dd4bb8660381_%C2%A9%20Copyright%20Noteshub%20Inc..svg"
            loading="lazy" alt="" class="image-10" />
    </div>
    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=618b532ec1a5dd65a97382b9"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <script src="homeScript.js" type="text/javascript"></script>
    
        </>
    )
}
