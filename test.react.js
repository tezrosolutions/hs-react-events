class Test extends React.Component {
    constructor(props) {
        super(props);
        this.launchEvent = this.launchEvent.bind(this);
    }

    launchEvent() {
        var _hsq = window._hsq = window._hsq || [];
        console.log(_hsq);
        _hsq.push(["identify", {
            email: "uu@tezrosolutions.com"
        }]);

        _hsq.push(['trackPageView']);
        
       _hsq.push(["trackEvent", {
            id: "Some Event"
        }]);

    }

    render() {
        return (<button onClick={this.launchEvent} > Track Event</button>);
    }
}
