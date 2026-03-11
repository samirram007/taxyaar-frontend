

import { useWizardModule } from '../contexts/wizard_module-context'
import ArticleDialog from './help-articles/article-dialog'



export function Dialogs() {
  const { keyName } = useWizardModule()
  return (
    <>
      <ArticleDialog
        key={`${keyName}-add`}
        // open={open === 'add'}
        // onOpenChange={() => setOpen('add')}
      />
      {/* {currentRow && (
        <>
          <ArticleDialog
            key={`${keyName}-article-${currentRow.slug}`}
            open={open === 'article'}
            onOpenChange={() => {
              setOpen('article')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />


        </>
      )} */}
    </>
  )
}
