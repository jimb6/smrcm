export class Schedule {
  label: string = ''
  remarks: string = ''
  landPrep: any = new Date()
  seedlingPrep: any = new Date()
  broadcasting: any = new Date()
  plotting: any = new Date()
  transplanting: any = new Date()
  sideDressFertilizer: any = new Date()
  topDressFertilizer: any = new Date()
  firstMonitoring: any[] = [new Date(), new Date()]
  secondMonitoring: any[] = [new Date(), new Date()]
  preHarvesting: any = new Date()
  postHarvesting: any[] = [new Date(), new Date()]
  milling: any = new Date()
}
