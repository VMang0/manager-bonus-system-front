export const Statuses = [
  {
    _id: 1,
    name: 'completed',
  },
  {
    _id: 2,
    name: 'in progress',
  },
  {
    _id: 3,
    name: 'off track',
  },
];

export const changeObjectsForTable = ({ pm, employees }) => {
  const PMs = pm.map((manager) => ({
    _id: manager._id,
    name: `${manager.info.name} ${manager.info.lastname}`,
  }));
  const users = employees.map((employee) => ({
    _id: employee._id,
    name: employee.info.name,
    lastname: employee.info.lastname,
    position: employee.info.position,
    rang: employee.info.rang,
  }));
  return { PMs, users };
};
