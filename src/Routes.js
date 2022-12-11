import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';

import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';


/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;

const Home = lazy(() => import('./components/Views/Home'));
const Collection = lazy(() => import('./components/Views/Collection'));
const Introduction = lazy(() => import('./components/Views/Introduction'));
const Ranking = lazy(() => import('./components/Views/Ranking'));
const Profile = lazy(() => import('./components/Views/Profile'));
const Terms = lazy(() => import('./components/Views/Terms'));
const Marketplaces = lazy(() => import('./components/Views/Marketplaces'));
const Buy = lazy(() => import('./components/Views/Buy'));
const Staking = lazy(() => import('./components/Views/Staking'));
const NFTView = lazy(() => import('./components/Views/NFTView'));
const MarketplaceScanner = lazy(() => import('./components/Views/MarketplaceScanner'));
const Launchpad = lazy(() => import('./components/Views/Launchpad'));

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
                    <Suspense fallback={<PageLoader/>}>
                        <Switch location={location}>
                            <Route path="/introduction/:collection" component={waitFor(Introduction)}/>
                            <Route path="/collection/:collection" component={waitFor(Collection)}/>
                            <Route path="/ranking" component={waitFor(Ranking)}/>
                            <Route path="/profile" component={waitFor(Profile)}/>
                            <Route path="/terms" component={waitFor(Terms)}/>
                            <Route path="/buy" component={waitFor(Buy)}/>
                            <Route path="/marketplaces" component={waitFor(Marketplaces)}/>
                            <Route path="/staking" component={waitFor(Staking)}/>
                            <Route path="/nftview" component={waitFor(NFTView)}/>
                            <Route path="/scanner" component={waitFor(MarketplaceScanner)}/>
                            <Route path="/launchpad" component={waitFor(Launchpad)}/>
                            <Route path="/" component={waitFor(Home)}/>

                            <Redirect to="/"/>
                        </Switch>
                    </Suspense>
                </div>
            </CSSTransition>
            </TransitionGroup>
        </Base>
    )
}

export default withRouter(Routes);
