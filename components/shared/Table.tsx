
import React, { ReactNode } from 'react';

interface TableProps<T> {
    columns: { header: string; accessor: keyof T | ((item: T) => ReactNode) }[];
    data: T[];
}

const Table = <T extends { id: string | number }>(
    { columns, data }: TableProps<T>
): React.ReactElement => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-white dark:bg-dark-secondary border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {columns.map((col, index) => (
                                <td key={index} className="px-6 py-4">
                                    {typeof col.accessor === 'function'
                                        ? col.accessor(item)
                                        : (item[col.accessor] as ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
