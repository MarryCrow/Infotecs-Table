export default function UserTable({
                                      users,
                                      getSortIndicator,
                                      handleSort,
                                      onSelectUser,
                                  }) {
    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm bg-white">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th
                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 min-w-[120px]"
                            onClick={() => handleSort('lastName')}
                        >
                            Фамилия {getSortIndicator('lastName')}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[100px]">
                            Имя
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[120px]">
                            Отчество
                        </th>
                        <th
                            className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 min-w-[80px]"
                            onClick={() => handleSort('age')}
                        >
                            Возраст {getSortIndicator('age')}
                        </th>
                        <th
                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hover:bg-gray-100 min-w-[90px]"
                            onClick={() => handleSort('gender')}
                        >
                            Пол
                        </th>
                        <th
                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 min-w-[160px]"
                            onClick={() => handleSort('phone')}
                        >
                            Телефон {getSortIndicator('phone')}
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[240px]">
                            Email
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[110px]">
                            Страна
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[130px]">
                            Город
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[200px]">
                            Адрес
                        </th>
                        <th
                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 min-w-[90px]"
                            onClick={() => handleSort('height')}
                        >
                            Рост (см) {getSortIndicator('height')}
                        </th>
                        <th
                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 min-w-[90px]"
                            onClick={() => handleSort('weight')}
                        >
                            Вес (кг) {getSortIndicator('weight')}
                        </th>
                        <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[90px]">
                            Аватар
                        </th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 bg-white">
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan={13} className="px-6 py-10 text-center text-gray-500">
                                Нет данных по выбранным фильтрам
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr
                                key={user.id}
                                className="hover:bg-blue-50 transition-colors cursor-pointer"
                                onClick={() => onSelectUser(user)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                    {user.lastName || '—'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.firstName || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.maidenName || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">{user.age ?? '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap capitalize">{user.gender || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.phone || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{user.email || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.address?.country || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.address?.city || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.address?.address || '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">{user.height ? Math.round(user.height) : '—'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">{user.weight ? Math.round(user.weight) : '—'}</td>
                                <td className="px-6 py-4 text-center">
                                    {user.image ? (
                                        <img
                                            src={user.image}
                                            alt={`${user.firstName} ${user.lastName}`}
                                            className="w-10 h-10 rounded-full object-cover mx-auto border border-gray-300"
                                        />
                                    ) : (
                                        '—'
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}