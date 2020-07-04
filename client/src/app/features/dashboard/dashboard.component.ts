import { Component, OnInit } from '@angular/core';

import { PartsService, IParts } from '../../services/parts/parts.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    displayedColumns: string[] = ['id', 'temp', 'part', 'category', 'qty', 'unit_cost'];
    dataSource: IParts[] = [];

    constructor(private partsService: PartsService) { }

    ngOnInit(): void {
        this.loadParts();
    }

    private loadParts() {
        this.partsService.getParts().subscribe((parts) => {
            this.dataSource = parts;
        });
    }
}
