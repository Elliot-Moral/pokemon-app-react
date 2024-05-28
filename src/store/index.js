
//## este import representa a strore donde se guardan los estados globales.
import { configureStore } from '@reduxjs/toolkit'
import trainer from './slices/trainer.slice'

export default configureStore({
  reducer:{
    trainer
  }
})