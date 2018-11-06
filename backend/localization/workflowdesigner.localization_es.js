var WorkflowDesignerConstants = {
  ActivityColor: "#ECF0F1",
  ActivityTextColor: "#2D3436",
  ActivityInitialColor: "#27AE60",
  ActivityInitialTextColor: "#FFFFFF",
  ActivityFinalColor: "#2980B9",
  ActivityFinalTextColor: "#FFFFFF",
  ActivityShape: "#CECEJA",
  SelectColor: "#F39C12",
  SelectTextColor: "#FFFFFF",
  SelectSubProcessColor: "#e3b015",
  SelectSubProcessTextColor: "#FFFFFF",
  ButtonActive: "#D4D8D9",
  BarColor: "#EDF1F2",
  BarSeparatorColor: "#D9DEE0",
  DeleteConfirm: "¿Está seguro de que desea eliminar los elementos seleccionados?",
  DeleteConfirmCurrent: "¿Estás seguro de que quieres eliminar este elemento?",
  FieldIsRequired: "¡Se requiere campo!",
  FieldMustBeUnique: "¡El campo debe ser único!",
  ButtonTextDelete: "Borrar",
  ButtonTextCreate: "Crear",
  ButtonTextSave: "Salvar",
  ButtonTextYes: "Sí",
  ButtonTextNo: "No",
  ButtonTextCancel: "Cancelar",
  ButtonTextClose: "Cerrar",
  ButtonTextUndo: "Deshacer",
  ButtonTextRedo: "Rehacer",
  SaveConfirm: "¿Guardar cambios?",
  CloseWithoutSaving: "¿Cerrar sin guardar?",
  DialogConfirmText: "Pregunta",
  None: "Ninguna",
  Warning: "Advertencia",
  InfoBlockLabel: {
    Activity: "Ocupaciones:",
    Transition: "Transiciones",
    Command: "Comandos:"
  },
  ActivityNamePrefix: "Actividad_",
  ActivityFormLabel: {
    Title: "Actividad",
    Name: "Nombre",
    State: "Estado",
    IsInitial: "Inicial",
    IsFinal: "Final",
    IsForSetState: "Para estado fijo",
    IsAutoSchemeUpdate: "Actualización automática del esquema",
    Implementation: "Implementación",
    PreExecutionImplementation: "Implementación Pre Ejecución",
    ImpOrder: "Orden",
    ImpAction: "Acción",
    ImpActionParameter: "Parámetro de acción",
    AlwaysConditionShouldBeSingle: "Siempre la condición debe ser individual",
    OtherwiseConditionShouldBeSingle: "De lo contrario la condición debe ser única."
  },
  TransitionFormLabel: {
    Title: "Transición",
    Name: "Nombre",
    From: "De la actividad",
    To: "A la actividad",
    Classifier: "Clasificador",
    Restrictions: "Restricciones",
    RestrictionsType: "Tipo",
    RestrictionsActor: "Actor",
    Condition: "Condición",
    ConditionType: "Tipo",
    ConditionAction: "Acción",
    ResultOnPreExecution: "Resultado en la ejecución previa",
    Trigger: "Desencadenar",
    TriggerType: "Tipo",
    TriggerCommand: "Mando",
    TriggerTimer: "Minutero",
    ConditionActionParameter: "Parámetro de acción",
    ConditionInversion: "Invertir resultado de acción",
    ConditionsConcatenationType: "Tipo de concatenación de condiciones.",
    AllowConcatenationType: "Concat permitir como",
    RestrictConcatenationType: "Concat restringir como",
    ConditionsListShouldNotBeEmpty: "La lista de condiciones no debe estar vacía",
    IsFork: "Es tenedor",
    MergeViaSetState: "Fusionar subproceso a través del estado establecido",
    DisableParentStateControl: "Deshabilitar el control del proceso padre",
    ShowConcatParameters: "Mostrar concatenación",
    HideConcatParameters: "Ocultar concatenación"
  },
  LocalizationFormLabel: {
    Title: "Localización",
    ObjectName: "Nombre del objeto",
    Type: "Tipo",
    IsDefault: "IsDefault",
    Culture: "Cultura",
    Value: "Valor",
    Types: [
      "Command",
      "State",
      "Parameter"
    ]
  },
  TimerFormLabel: {
    Title: "Temporizadores",
    Name: "Nombre",
    Type: "Tipo",
    Value: "Valor",
    Types: [
      "Command",
      "State",
      "Parameter"
    ],
    NotOverrideIfExists: "No anular el temporizador si existe"
  },
  ParameterFormLabel: {
    Title: "Parámetros",
    Name: "Nombre",
    Type: "Tipo",
    Purpose: "Propósito",
    Value: "Valor",
    InitialValue: "Valor inicial",
    ShowSystemParameters: "Mostrar parámetros del sistema"
  },
  ActorFormLabel: {
    Title: "Los actores",
    Name: "Nombre",
    Rule: "Regla",
    Value: "Valor"
  },
  CommandFormLabel: {
    Title: "Mando",
    Name: "Nombre",
    InputParameters: "Parámetros de entrada",
    InputParametersName: "Nombre",
    InputParametersIsRequired: "Necesario",
    InputParametersParameter: "Parámetro",
    InputParametersDefaultValue: "Defecto"
  },
  AdditionalParamsFormLabel: {
    Title: "Parámetros adicionales",
    IsObsolete: "Es obsoleto",
    DefiningParameters: "Definiendo parametros",
    ProcessParameters: "Parámetros de proceso",
    ProcessParametersName: "Nombre",
    ProcessParametersValue: "Valor"
  },
  CodeActionsFormLabel: {
    Title: "Acciones de código",
    Name: "Nombre",
    ActionCode: "Código de acción",
    IsGlobal: "Es global",
    IsAsync: "Asíncrono",
    Type: "Tipo",
    GlobalDeleteMessage: "Has eliminado Global CodeAction. <br/> <b> ¡Otros esquemas no podrán llamar a esta CodeAction! </b>",
    UnGlobalMessage: "Ha cambiado el estado de la bandera global. <br/> Se creará una acción de código local basada en esta acción de código global después de guardar este esquema."
  },
  ToolbarLabel: {
    CreateActivity: "Crear actividad",
    CopySelected: "Copia seleccionada",
    Undo: "Deshacer",
    Redo: "Rehacer",
    Move: "Movimiento",
    ZoomIn: "Acercarse",
    ZoomOut: "Disminuir el zoom",
    ZoomPositionDefault: "Zoom por defecto",
    FullScreen: "Pantalla completa",
    Refresh: "Refrescar",
    AutoArrangement: "Arreglo automático",
    Actors: "Los actores",
    Commands: "Comandos",
    Parameters: "Parámetros",
    Localization: "Localización",
    Timers: "Temporizadores",
    AdditionalParameters: "Parámetros adicionales",
    CodeActions: "Acciones de código",
    Info: "Información extendida",
    Delete: "Borrar",
    Clone: "Clon",
    Settings: "Ajustes",
    CreateTransition: "Crear una transición",
    CreateActivityTransition: "Crear una actividad y una transición.",
    Legend: "Leyenda"
  },
  ErrorActivityIsInitialCountText: "Un elemento debe estar marcado bandera Inicial",
  ErrorReadOnlySaveText: "El Diseñador en modo ReadOnly, no puede guardarlo.",
  FormMaxHeight: 700,
  EditCodeSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 390,
    MessageBoxHeight: 400,
    MessageBoxWidth: 600,
    SuccessBoxHeight: 150,
    SuccessBoxWidth: 300
  },
  EditCodeLabel: {
    Title: "Editar código",
    EditCodeButton: "Editar código",
    Usings: "Usings",
    Compile: "Compilar",
    CompileSucceeded: "La compilación tuvo éxito.",
    Success: "Éxito",
    Error: "Error",
    OK: "OK",
    ShowUsings: "Mostrar usings",
    HideUsings: "Ocultar usings"
  },
  EditJSONSettings: {
    Height: 600,
    Width: 1000,
    CodeHeight: 480
  },
  EditJSONLabel: {
    Title: "Editar valor en JSON",
    CreateEmptyType: "Crear",
    Format: "Formato"
  },
  isjava: false,
  OverviewMap: {
    show: true,
    width: 300,
    height: 150
  },
  UndoDepth: 200,
  DefaultCulture: "en-US"
};