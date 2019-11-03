import React, { Component } from 'react';

export class PoinRule extends Component {
    render() {
        return (
            <div>
                <h3 align="center">Rule List</h3>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            Tên quy tắc
                        </th>
                        <th></th>
                    </tr>
                </thead>

                </table>
            </div>
        );
    }
}

export default PoinRule;
