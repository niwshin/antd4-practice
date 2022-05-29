export type TableDataType = {
  id: string,
  label: string,
  radioSelection?: string,
  treeSelection?: string[]
};

export type FormType = {
  category: string,
  tableSetting: TableDataType[],
};
