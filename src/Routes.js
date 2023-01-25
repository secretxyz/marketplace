import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';


/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const Home = lazy(() => import('./components/Views/Home'));
const Collection = lazy(() => import('./components/Views/Collection'));
const ExplorerCollections = lazy(() => import('./components/Views/ExplorerCollections'));
const ExplorerNfts = lazy(() => import('./components/Views/ExplorerNfts'));
const ExplorerRaffles = lazy(() => import('./components/Views/ExplorerRaffles'));
const NftDetails = lazy(() => import('./components/Views/NftDetails'));
const RaffleDetails = lazy(() => import('./components/Views/RaffleDetails'));
const Drop = lazy(() => import('./components/Views/Drop'));
const Ranking = lazy(() => import('./components/Views/Ranking'));
const Activity = lazy(() => import('./components/Views/Activity'));
const Create = lazy(() => import('./components/Views/Create'));
const Profile = lazy(() => import('./components/Views/Profile'));

const About = lazy(() => import('./components/Views/Resource/About'));
const Faq = lazy(() => import('./components/Views/Resource/Faq'));
const PrivacyPolicy = lazy(() => import('./components/Views/Resource/PrivacyPolicy'));
const TermsCondition = lazy(() => import('./components/Views/Resource/TermsCondition'));

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    return (
        // Layout component wrapper
        // Use <BaseHorizontal> to change layout
        <Base>
            <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Suspense fallback={<PageLoader />}>
                            <Switch location={location}>
                                <Route path="/collection/:slug" component={waitFor(Collection)} />
                                <Route path="/explorer-collections" component={waitFor(ExplorerCollections)} />
                                <Route path="/explorer-nfts" component={waitFor(ExplorerNfts)} />
                                <Route path="/explorer-raffles" component={waitFor(ExplorerRaffles)} />
                                <Route path="/nft/:tokenid/:raffleid" component={waitFor(NftDetails)} />
                                <Route path="/nft/:tokenid" component={waitFor(NftDetails)} />
                                <Route path="/raffle" component={waitFor(RaffleDetails)} />
                                <Route path="/drop" component={waitFor(Drop)} />
                                <Route path="/ranking" component={waitFor(Ranking)} />
                                <Route path="/activity" component={waitFor(Activity)} />

                                <Route path="/my-profile/:menu" component={waitFor(Profile)} />
                                <Route path="/my-profile" component={waitFor(Profile)} />
                                <Route path="/profile/:wallet" component={waitFor(Profile)} />
                                <Route path="/create" component={waitFor(Create)} />

                                <Route path="/about" component={waitFor(About)} />
                                <Route path="/faq" component={waitFor(Faq)} />
                                <Route path="/privacy-policy" component={waitFor(PrivacyPolicy)} />
                                <Route path="/terms-condition" component={waitFor(TermsCondition)} />

                                <Route path="/" component={waitFor(Home)} />

                                <Redirect to="/" />
                            </Switch>
                        </Suspense>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Base>
    )
}

export default withRouter(Routes);
