import './app.less'
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Table from 'reactui-table'
import Pagination from '../src/Pagination'
import packageJson from '../package.json'
class App extends Component {
    constructor(props) {
        super(props)
    }

    handleclick(){
        alert(1)
    }
    pageClick(){
        alert(2)
    }
    render() {
        let columns = ['示例1','示例2','示例3','操作']
        let tdata = [{
            id : 1,
            name : 'hello',
            email : 'qq@qq.com'
        },{
            id : 2,
            name : 'admin',
            email : 'admin@qq.com'
        }]
        let action = {
            className : 'col-action clearfix',
            type : 'html',
            click : this.handleclick.bind(this),
            value : ''
        }
        let label = '<a class="label '+'add'+'"' + ' data-status="' + '1'+'">' +'添加'+'</a>'
        action.value = label
        let cdata = [[1,"hello","qq@qq.com",action],[2,"admin","admin@qq.com",action]]
        const config = {
            currentPage : 1,
            total : 100,
            perNum : 6
        }
        return (
            <div className="app">
                <h1>{packageJson.name}</h1>
                <h2>{packageJson.description}</h2>
                <form>
                    <Table columns={columns} tdata={cdata}></Table>
                    <Pagination onclick={this.pageClick.bind(this)} config={config}></Pagination>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
