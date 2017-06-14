import {comicModalComponent} from './comic-modal.component';
import './comic-modal.scss';

export const comicModal = angular
    .module('common.comic-modal', [])
    .component('comicModal', comicModalComponent)
    .name;