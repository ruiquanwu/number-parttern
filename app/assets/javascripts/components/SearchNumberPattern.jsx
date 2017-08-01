var SearchNumberPattern = React.createClass({
    getInitialState: function() {
        return (
            {
                pattern: "",
                predictPatterns: []       
            }
        )
    },
    
    setPattern: function(e) {
        e.preventDefault()
        this.setState({
            pattern: e.target.value
        })
    },
    
    searchPattern: function(e) {
        e.preventDefault()
        
        $.ajax({
            url: "/searchPattern",
            type: "POST",
            data: {pattern: this.state.pattern},
            success: (data) => {
                this.setState({
                    predictPatterns: data
                })
            }
        })
    },
    
    render: function() {
        return (
            <div className="seach-number-pattern">
                <div className="col-md-offset-1 col-md-10 col-xs-12">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="输入相连的数字模式" value={this.state.pattern} onChange={this.setPattern}/>
                        <span className="input-group-btn">
                              <button className="btn btn-success" onClick={this.searchPattern}>Search</button>
                        </span>
                    </div>
                </div>
                {
                    this.state.predictPatterns.length > 0 &&
                    <div className="col-md-offset-1 col-md-10 col-xs-12 predict-result">
                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>模式</th>
                                    <th>出现次数</th>
                                    <th>出现概率</th>
                                </tr>
                            </thead> 
                            <tbody>
                            {
                                this.state.predictPatterns.map((pattern, index) => 
                                    <tr key={index}>
                                        <td>{pattern.value}</td>
                                        <td>{pattern.count}</td>
                                        <td>{pattern.percentage}</td>
                                    </tr>
                            )
                                
                            }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        )
    }
})