export default function UserTable({
                                      users,
                                      sortField,
                                      sortOrder,
                                      getSortIndicator,
                                      handleSort,
                                      onSelectUser,
                                  }) {
    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <div className="overflow-x-auto border rounded shadow bg-white">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                    <tr>
                        <th
                            className="border p-3 cursor-pointer hover:bg-gray-200 min-w-[120px]"
                            onClick={() => handleSort('lastName')}
                        >
                            Фамилия {getSortIndicator('lastName')}
                        </th>
                        <th className="border p-3 min-w-[100px]">Имя</th>
                        <th className="border p-3 min-w-[120px]">Отчество</th>
                        <th
                            className="border p-3 text-right cursor-pointer hover:bg-gray-200 min-w-[80px]"
                            onClick={() => handleSort('age')}
                        >
                            Возраст {getSortIndicator('age')}
                        </th>
                        <th className="border p-3 cursor-pointer min-w-[90px]">
                            Пол
                        </th>
                        <th
                            className="border p-3 cursor-pointer hover:bg-gray-200 min-w-[160px]"
                            onClick={() => handleSort('phone')}
                        >
                            Телефон {getSortIndicator('phone')}
                        </th>
                        <th className="border p-3 min-w-[220px]">Email</th>
                        <th className="border p-3 min-w-[110px]">Страна</th>
                        <th className="border p-3 min-w-[130px]">Город</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={9} className="p-10 text-center text-gray-500">
                                Нет данных
                            </td>
                        </tr>
                    ) : (
                        users.map(user => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => onSelectUser(user)}
                            >
                                <td className="border p-3">{user.lastName || '-'}</td>
                                <td className="border p-3">{user.firstName || '-'}</td>
                                <td className="border p-3">{user.maidenName || '-'}</td>
                                <td className="border p-3 text-right">{user.age ?? '-'}</td>
                                <td className="border p-3">{user.gender || '-'}</td>
                                <td className="border p-3">{user.phone || '-'}</td>
                                <td className="border p-3">{user.email || '-'}</td>
                                <td className="border p-3">{user.address?.country || '-'}</td>
                                <td className="border p-3">{user.address?.city || '-'}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}