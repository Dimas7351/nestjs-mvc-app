import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';
import { DatasourceService } from 'src/datasource/datasource.service';
import { HttpStatus } from '@nestjs/common';

@Injectable()
export class OrdersService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(order: Order) {
        this.datasourceService.getOrders().push(order);
        return order;}

    findOne(id: number) {
        return this.datasourceService
            .getOrders()
            .find((order) => order.id === id);
        }
    
    findAll(): Order[] {
        return this.datasourceService.getOrders();
        }

    update(id: number, updatedOrder: Order) {
        const index = this.datasourceService
            .getOrders()
            .findIndex((order) => order.id === id);
        this.datasourceService.getOrders()[index] = updatedOrder;
        return this.datasourceService.getOrders()[index];
        }

    remove(id: number) {
        const index = this.datasourceService
            .getOrders()
            .findIndex((order) => order.id === id);
        this.datasourceService.getOrders().splice(index, 1);
        return HttpStatus.OK;
        }

}