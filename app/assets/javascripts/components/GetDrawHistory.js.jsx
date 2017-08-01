var GetDrawHistory = React.createClass({
    getInitialState: function() {
        return({
            drawNumber: "",
            drawResult: ""            
        })
    },
    
    setDrawNumber: function(e) {
        e.preventDefault()
        this.setState({
            drawNumber: e.target.value
        })
    },
    
    // get draw result base on dran number
    getDrawResult: function(e) {
        e.preventDefault()
        let xmlhttp = new XMLHttpRequest();
        let url = "http://caipiao.163.com/award/qxc/" + this.state.drawNumber + ".html"
        
        console.log(url)
        // establish connection
        xmlhttp.open('GET', url, false)
        xmlhttp.send()
        
        console.log(xmlhttp.response)
        let parser = new DOMParser();
        
        // parse string to html
        let xdom = parser.parseFromString(xmlhttp.response, "text/html")
        
        console.log(xdom.getElementById("zj_area"))
        let DRAWLENGTH = 8
        let result = ""
        for(var index = 0; index < DRAWLENGTH; index++) {
            result += xdom.getElementById("zj_area").children[index].innerHTML
        }
        
        this.setState({
            drawResult: result
        })
        
    },
    
    render: function() {
        return (
            <div className="get-draw-history">
                <input type="text" value={this.state.drawNumber} onChange={this.setDrawNumber}/>
                <button className="btn btn-default" onClick={this.getDrawResult}>GetResult</button>
                {
                    this.state.drawResult &&
                    <div>
                        <p>{this.state.drawResult}</p>
                    </div>
                }
            </div>
        )
    }
})